import { EmailAuthProvider, linkWithCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auth } from '../../firebase';

const EmailAuth = () => {
    const [userA, setUserA] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const handleVerifyEmail: SubmitHandler<any> = async (user: any) => {
        // Construct the email link credential from the current URL.
        const credential = EmailAuthProvider.credentialWithLink(
            user.email, window.location.href);

        // Link the credential to the current user.
        await linkWithCredential(user, credential)
            .then((usercred) => {
                // The provider is now successfully linked.
                setUserA(usercred.user)
                console.log(userA);

                console.log('Successfully linked.');
                console.log(usercred.user);

                // The phone user can now sign in with their phone number or email.
            })
            .catch((error) => {
                // Some error occurred.
                console.log(error.message);

            });
    }
    return (
        <>
            {/* {user ? */}
            <div>
                <form className='' onSubmit={handleSubmit(handleVerifyEmail)}>
                    <input {...register('email')} type="email" name="email" className='border' />
                    <input {...register('password')} type="password" name="password" className='border' />
                    <button className=''>Submit</button>
                </form>
            </div>
            {/*     :
                <h2>Login successfully!</h2>
            } */}
        </>
    )
}

export default EmailAuth