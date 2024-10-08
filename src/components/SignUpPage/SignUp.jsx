import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import InputBox from '../Inputs/InputBox';
import PrimaryButton from '../Btn/PrimaryButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(name, email, password);

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <div className="animate-fadeIn grid lg:grid-cols-2 mt-12 gap-10 lg:w-full lg:px-0 md:px-20 place-content-center">
      <div className="lg:flex sm:hidden">
        <HeroImage />
      </div>

      <section className="lg:pt-0 md:pt-10 md:w-[399px] sm:w-[335px]">
        <div>
          <h1>Sign Up</h1>
          <p className="description pb-10 pt-6">
            Step into a world of hassle-free expense management! Your journey{' '}
            <br />
            towards financial mastery begins here.
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 pb-16 w-[399px]">
            <InputBox
              type="text"
              placeholder="Name"
              backgroundColor="bg-[#0C0D0D]"
              name="name"
              title=""
              textColor="text-white"
            />
            <InputBox
              type="email"
              placeholder="Email"
              backgroundColor="bg-[#0C0D0D]"
              name="email"
              title=""
              textColor="text-white"
            />
            <InputBox
              type="password"
              placeholder="Password"
              backgroundColor="bg-[#0C0D0D]"
              name="password"
              title=""
              textColor="text-white"
            />
          </div>

          <div className="flex flex-col gap-5 items-start">
            <PrimaryButton title="Sign Up" icon="" />
            <p className="text-neutral-400">
              Already have an account?{' '}
              <span className="text-neutral-200 underline underline-offset-4 hover:text-custom-green">
                <Link to="/signin">Sign In</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
