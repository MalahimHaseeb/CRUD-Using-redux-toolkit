import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full">
        <footer className="text-center text-lg-start bg-gray-500">
          {/* Copyright */}
          <div className="text-center text-white p-3 bg-transparent">
            © 2024 Copyright:
            <Link className="text-white" to="https://www.instagram.com/malahimhaseeb?igsh=MTl4Z3FpbzFjd3RxMw==">
            MalahimHaseebInsta.com
            </Link>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    </>
  );
};

export default Footer;
