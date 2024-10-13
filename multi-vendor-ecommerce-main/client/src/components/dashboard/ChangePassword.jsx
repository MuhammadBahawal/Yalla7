import React from 'react'

const ChangePassword = () => {
  return (
    <div className='p-4 bg-white'>
        <h2 className='text-xl text-black pb-5'>Chage Password</h2>
        <form>
            <div className='flex flex-col gap-1 text-black mb-2'>
                <label htmlFor="old_password">Old Password</label>
                <input type="password" id='old_password' name='old_password' placeholder='old password' className='outline-none px-3 py-1 border rounded-md text-slate-600' />
            </div>
            <div className='flex flex-col text-black gap-1 mb-2'>
                <label htmlFor="new_password">New Password</label>
                <input type="password" id='new_password' name='new_password' placeholder='new password' className='outline-none px-3 py-1 border rounded-md text-slate-600' />
            </div>
            <div>
                <button className='px-8 py-2 bg-[#FFD700] shadow-lg hover:shadow-purple-500/30 text-black rounded-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default ChangePassword