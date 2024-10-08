import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import defaultProfile from '../../assets/default-profile.png'; // Updated import

import SettingsButton from '../Btn/SettingsButton';
import CurrencyDropDown from '../Inputs/CurrencyDropDown';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateAvatar,
  updateUser,
  removeAvatar,
  refreshUser,
} from '../../redux/authOperations';
import CloseButton from '../Btn/CloseButton';

const extractAvatarId = avatarUrl => {
  const regex = /\/avatar\/([^]+)\.webp$/;
  const match = avatarUrl.match(regex);
  if (!match) {
    console.error('Failed to extract avatarId from URL:', avatarUrl);
    return null;
  }
  return match[1];
};

const UserSetsModal = ({ title, toggleModal }) => {
  const userName = useSelector(state => state.auth.user.name);
  const userAvatar = useSelector(state => state.auth.user.avatarUrl);

  const [newName, setNewName] = useState(userName);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Default Profile Image Path:', defaultProfile);
  }, []);

  const handleAvatarUpload = file => {
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateAvatar(formData));
    dispatch(refreshUser());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const currency = formData.get('currency');

    if (!name || !currency) {
      Notify.failure('Please fill in all the fields');
      return;
    }

    dispatch(updateUser({ name, currency }));
    dispatch(updateAvatar(userAvatar));
    toggleModal();
  };

  const handleRemoveAvatar = avatarUrl => {
    const avatarId = extractAvatarId(avatarUrl);

    if (!avatarId) {
      console.error('Invalid avatarId. Cannot proceed with removal.');
      return;
    }

    dispatch(removeAvatar(avatarId))
      .unwrap()
      .then(() => {})
      .catch(error => {
        console.error('Failed to remove avatar:', error);
      });

    dispatch(updateAvatar(defaultProfile));
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      <div
        className="fixed w-screen h-screen bg-stone-950 z-50 opacity-80 top-0 left-0 m-auto overflow-hidden"
        onClick={handleOverlayClick}
      ></div>
      <div className="sm:w-[335px] md:w-[500px] h-[461px] bg-neutral-900 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-3xl md:px-10 sm:px-6 py-8">
        <CloseButton toggleModal={toggleModal} />
        <p className="text-2xl pt-3">{title}</p>
        <div className="flex flex-col items-center pt-10">
          <div
            className="h-[100px] w-[100px] flex items-center justify-center rounded-full"
            style={{ backgroundColor: '#0C0D0D' }} // Updated background color
          >
            <img
              src={userAvatar || defaultProfile}
              alt="User Avatar"
              className="h-3/4 w-3/4 rounded-full object-contain"
              onError={e => {
                e.target.onerror = null;
                e.target.src = defaultProfile;
              }}
            />
          </div>
          <div className="flex gap-3 pt-7">
            <label
              htmlFor="avatarUpload"
              className="flex items-center bg-neutral-800 py-2 px-5 rounded-3xl"
              style={{ cursor: 'pointer' }}
            >
              <p>Upload new photo</p>
              <input
                type="file"
                style={{ display: 'none' }}
                name="avatar"
                id="avatarUpload"
                onChange={e => handleAvatarUpload(e.target.files[0])}
              />
            </label>
            <SettingsButton
              title="Remove"
              handleRemoveAvatar={handleRemoveAvatar}
            />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 items-center w-full mt-4 gap-2 text-white">
              <div className="col-span-2 relative">
                <CurrencyDropDown
                  display="block"
                  border="border-2 border-neutral-500"
                  extraData="profileSettingsCurrencyBox"
                  textColor="text-white"
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="name" className="flex-1">
                  <input
                    type="name"
                    className="bg-neutral-900 border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 text-white w-full"
                    name="name"
                    id="name"
                    value={newName}
                    placeholder="Name"
                    required
                    onChange={e => setNewName(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <button className="w-full my-3 bg-green-400 text-black py-3 px-10 rounded-3xl font-medium hover:bg-green-300">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSetsModal;

UserSetsModal.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
