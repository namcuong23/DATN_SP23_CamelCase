import { useState } from "react"
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import { CgSpinner } from "react-icons/cg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OtpInput from "otp-input-react"
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../firebase";

const Login = () => {
    const [otp, setOtp] = useState("")
    const [ph, setPh] = useState("")
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [user, setUser] = useState(null)
    const windowType: any = window

    const onCapchaVerify = () => {
        if (!windowType.recaptchaVerifier) {
            windowType.recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: (response: any) => {
                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                        onSignup()
                    },
                    "expired-callback": () => {
                        // Response expired. Ask user to solve reCAPTCHA again.
                    }
                },
                auth
            );
        }
    }

    const onSignup = async () => {
        setLoading(true)
        onCapchaVerify()

        const appVerifier = windowType.recaptchaVerifier;
        const phoneNumber = '+' + ph
        await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code)
                console.log('3');
                windowType.confirmationResult = confirmationResult
                setLoading(false);
                setShowOTP(true)
                toast.success('OTP sended successfully!')
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    const onOTPVerify = () => {
        setLoading(true);
        windowType.confirmationResult.confirm(otp).then(async (res: any) => {
            console.log(res);
            setUser(res.user)
            setLoading(false);
        }).className((err: any) => {
            console.log(err);
            setLoading(false);
        })
    }

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {
                    user ?
                        <h2 className="text-center text-white font-medium text-2xl">
                            Login Success
                        </h2> :
                        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                                Otp Authentication
                            </h1>

                            {
                                showOTP ?
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsFillShieldLockFill size={30} />
                                        </div>
                                        <label
                                            htmlFor="ph"
                                            className="font-bold text-xl text-white text-center"
                                        >
                                            Enter your OTP
                                        </label>
                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            OTPLength={6}
                                            otpType="number"
                                            disabled={false}
                                            autoFocus
                                            className="opt-container"
                                        ></OtpInput>
                                        <button
                                            onClick={onOTPVerify}
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                            {
                                                loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                            }

                                            <span>Verify OTP</span>
                                        </button>
                                    </> :
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsTelephoneFill size={30} />
                                        </div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-xl text-white text-center"
                                        >
                                            Xác thực bằng số điện thoại
                                        </label>
                                        <PhoneInput
                                            country={"vn"}
                                            value={ph}
                                            onChange={setPh} />
                                        <button
                                            onClick={onSignup}
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                            {
                                                loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                            }

                                            <span>Gửi mã</span>
                                        </button>
                                    </>
                            }

                        </div>

                }
            </div>
        </section>
    )
}

export default Login