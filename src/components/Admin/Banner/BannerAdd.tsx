import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'
import { useUploadImage } from '../../../utils/hooks/Upload';
import { toast } from 'react-toastify';
import { AvatarIcon } from '../../employee/profile/icons';
import { useChangeBannerMutation } from '../../../service/admin/banner';

const BannerForm = () => {


    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const navigate = useNavigate()
    const [param, setParam] = useSearchParams()
    const [imgUrl, setImgUrl] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [currentUrl, setCurrentUrl] = useState<any>()
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    const [changeAvatar] = useChangeBannerMutation()

    useEffect(() => {
        return () => {
            imgUrl && URL.revokeObjectURL(imgUrl.preview)
        }
    }, [imgUrl])

    const handleChangeInputFile = (e: any) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        setImgUrl(file)
        setCurrentUrl(e)
    }

    const handleChangeBanner = async () => {
        setLoading(true)
        const formData = new FormData()
        const fileUpload = currentUrl?.target.files[0]

        //Check image size
        if (fileUpload.size > maxSizeInBytes) {
            return toast.warn('Kích thước quá lớn.')
        }

        formData.append('file', fileUpload)
        formData.append('upload_preset', 'dmjlzwse')
        formData.append('cloud_name', 'dywccbjry')

        let newImage
        if (fileUpload !== undefined) {
            const image = await useUploadImage(formData)
            newImage = image.url
        }
        await changeAvatar({
            email,
            newImage
        }).then((res: any) => {
            {
                const { data } = res
                if (data?.success) {
                    setLoading(false)
                    toast.success('Cập nhật thành công')
                }
            }
        }).catch((err: any) => {
            setLoading(false)
            console.log(err.message);
        })
    }

    if (isLoggedIn == false) {
        return navigate('/login')
    }
    return (
        <section className='border-1 rounded p-3' style={{ marginTop: "100px" }}>
            <div className="mb-3">
                <label className="company-label">Ảnh banner</label>
                <div className='company-wrapper' style={{height: "300px"}}>
                    {
                          !imgUrl && Image === undefined ? "abc"
                            :
                            <div className='company-photo'
                                style={{ backgroundImage: `url(${imgUrl ? imgUrl.preview : Image})`, backgroundSize: 'cover',  // hoặc 'contain'
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: '100%',  // Thiết lập kích thước của div
                                height: '200px', // Hoặc đặt chiều cao theo mong muốn
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center', }}>
                                <div className="company-photo__action">
                                    <label htmlFor="company-logo" className="company-photo__action-label">
                                        <i className="fa-solid fa-pen"></i>
                                    </label>
                                    <span className='company-photo__action-desc'>Sửa banner</span>
                                    <input style={{ display: 'none' }} type="file"
                                        id='company-logo'
                                        accept="image/*"
                                        onChange={handleChangeInputFile}
                                    />
                                </div>

                            </div>

                    }
                </div>

            </div>
            <button onClick={handleChangeBanner} className='bg-[#FE7D55] hover:bg-[#FD6333] text-white py-1 px-10 text-[16px] rounded'>Lưu</button>

        </section>
    )
};

export default BannerForm;
