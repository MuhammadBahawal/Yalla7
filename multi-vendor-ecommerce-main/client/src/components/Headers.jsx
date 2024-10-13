import React, { useState } from 'react';
import { FaUser, FaLock, FaList, FaBars, FaTimes, FaHeadset, FaStore } from 'react-icons/fa'; // Updated shop icon
import { AiFillShopping, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai'; // Shopping and search icons
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Headers = () => {
    const navigate = useNavigate();
    const { categorys } = useSelector(state => state.home);
    const { userInfo } = useSelector(state => state.auth);
    const { card_product_count } = useSelector(state => state.card);

    const [categoryShow, setCategoryShow] = useState(false);
    const [supportShow, setSupportShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const search = () => {
        navigate(`/products/search?category=${searchValue}`);
    };

    const redirectCardPage = () => {
        if (userInfo) {
            navigate(`/card`);
        } else {
            navigate(`/login`);
        }
    };

    return (
        <div className='w-full bg-[#FFD700]'> {/* Updated header background color */}
            <div className='w-[85%] lg:w-[90%] mx-auto py-4'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <Link to='/'>
                        <img src="http://localhost:3000/images/logo.webp" alt="logo" className='w-[60px] rounded-[4px]' />
                    </Link>

                    {/* Full Navigation Links for small screens */}
                    <ul className={`lg:hidden flex justify-start items-center gap-8 text-sm font-bold uppercase text-[#333]`}>
                        <li>
                            <Link to='/shops' className='nav-link flex items-center gap-1'>
                                <FaStore /> {/* Updated shop icon */}
                                Shop
                            </Link>
                        </li>
                        <li className='relative'
                            onMouseEnter={() => setCategoryShow(true)}
                            onMouseLeave={() => setCategoryShow(false)}
                        >
                            {/* Category Dropdown */}
                            <div className='cursor-pointer flex items-center gap-2'>
                                <FaList />
                                <span>All Category</span>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                            {/* Dropdown content */}
                            {categoryShow && (
                                <div className='absolute z-10 bg-white border rounded-md shadow-lg mt-2 w-48'>
                                    <ul>
                                        {categorys.map((c, i) => (
                                            <li key={i} className='px-4 py-2 hover:bg-gray-200'>
                                                <Link to={`/products?category=${c.name}`} className='block'>
                                                    {c.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* Search Bar and Customer Support Dropdown for small screens */}
                    <div className='lg:hidden flex items-center'>
                        <div className='flex items-center rounded-full overflow-hidden'>
                            <input
                                type='text'
                                placeholder='What do you need?'
                                className='px-4 py-2 outline-none w-full text-sm text-black bg-#ffffff' // Set background to transparent
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button onClick={search} className='bg-[#333] px-4 py-2 text-white flex items-center'> {/* Updated button styles */}
                                <AiOutlineSearch className='text-lg' style={{ color: '#FFD700' }} /> {/* Search icon color updated */}
                            </button>
                        </div>

                        {/* Add space between search bar and customer support button */}
                        <div className='mx-2' />

                        {/* Customer Support Dropdown */}
                        <div className='relative ml-2'
                            onMouseEnter={() => setSupportShow(true)}
                            onMouseLeave={() => setSupportShow(false)}
                        >
                            <div className='cursor-pointer flex items-center gap-2'>
                                <FaHeadset className='text-gray-700' />
                                <span className='text-sm font-bold'>Customer Support</span>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                            {/* Dropdown content */}
                            {supportShow && (
                                <div className='absolute z-10 bg-white border rounded-md shadow-lg mt-1 w-48'>
                                    <ul>
                                        <li className='px-4 py-2 hover:bg-gray-200'>
                                            <Link to='/support/contact' className='block'>Contact Us</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-gray-200'>
                                            <Link to='/support/faq' className='block'>FAQ</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-gray-200'>
                                            <Link to='/privacy-policy' className='block'>Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* User Links and Cart for small screens */}
                    <div className='lg:hidden flex items-center gap-6'>
                        {userInfo ? (
                            <Link to='/dashboard' className='flex items-center gap-2'>
                                <FaUser />
                                <span>{userInfo.name}</span>
                            </Link>
                        ) : (
                            <Link to='/login' className='flex items-center gap-2'>
                                <FaLock />
                                <span>Login</span>
                            </Link>
                        )}

                        {/* Cart */}
                        <div onClick={redirectCardPage} className='relative cursor-pointer'>
                            <AiFillShopping className='text-4xl' style={{ backgroundColor: '#e6c200', color: '#333', padding: '8px', borderRadius: '50%' }} /> {/* Increased cart icon size */}
                            {card_product_count > 0 && (
                                <span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1'>
                                    {card_product_count}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Hamburger Icon for large screens */}
                    <div className='hidden lg:block'>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Full screen and slides in from the left */}
                <div
                    className={`hidden lg:flex fixed top-0 left-0 w-[75%] h-full bg-white z-40 p-8 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <Link to='/shops' className='nav-link flex items-center gap-1' onClick={() => setMenuOpen(false)}>
                                <FaStore /> {/* Updated shop icon */}
                                Shop
                            </Link>
                        </li>
                        <li className='relative'
                            onMouseEnter={() => setCategoryShow(true)}
                            onMouseLeave={() => setCategoryShow(false)}
                        >
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaList />
                                <span className='nav-link'>All Category</span>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                            {categoryShow && (
                                <div className='absolute z-10 bg-white border rounded-md shadow-lg mt-2 w-48'>
                                    <ul>
                                        {categorys.map((c, i) => (
                                            <li key={i} className='px-4 py-2 hover:bg-gray-200'>
                                                <Link to={`/products?category=${c.name}`} className='block'>
                                                    {c.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* Search Bar in desktop view */}
                        <li>
                            <div className='flex items-center border border-gray-300 rounded-full overflow-hidden'>
                                <input
                                    type='text'
                                    placeholder='What do you need?'
                                    className='px-4 py-2 outline-none w-full text-sm text-black bg-transparent' // Set background to transparent
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <button onClick={search} className='bg-[#333] px-4 py-2 text-white flex items-center'> {/* Updated button styles */}
                                    <AiOutlineSearch className='text-lg' style={{ color: '#FFD700' }} /> {/* Search icon color updated */}
                                </button>
                            </div>
                        </li>

                        {/* Customer Support Dropdown in Desktop View */}
                        <li className='relative'
                            onMouseEnter={() => setSupportShow(true)}
                            onMouseLeave={() => setSupportShow(false)}
                        >
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <FaHeadset className='text-gray-700' />
                                <span className='text-sm font-bold'>Customer Support</span>
                                <MdOutlineKeyboardArrowDown />
                            </div>
                            {supportShow && (
                                <div className='absolute z-10 bg-white border rounded-md shadow-lg mt-1 w-48'>
                                    <ul>
                                        <li className='px-4 py-2 hover:bg-gray-200'>
                                            <Link to='/support/contact' className='block'>Contact Us</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-gray-200'>
                                            <Link to='/support/faq' className='block'>FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* User Links and Cart */}
                        <li>
                            {userInfo ? (
                                <Link to='/dashboard' className='flex items-center gap-2' onClick={() => setMenuOpen(false)}>
                                    <FaUser />
                                    <span>{userInfo.name}</span>
                                </Link>
                            ) : (
                                <Link to='/login' className='flex items-center gap-2' onClick={() => setMenuOpen(false)}>
                                    <FaLock />
                                    <span>Login</span>
                                </Link>
                            )}
                        </li>
                        <li onClick={redirectCardPage} className='relative cursor-pointer'>
                            <AiFillShopping className='text-3xl' style={{ backgroundColor: '#e6c200', color: '#333', padding: '8px', borderRadius: '50%' }} />
                            {card_product_count > 0 && (
                                <span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1'>
                                    {card_product_count}
                                </span>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Headers;
