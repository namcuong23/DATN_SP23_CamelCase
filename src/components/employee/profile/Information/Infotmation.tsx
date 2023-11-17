import { useState } from "react"
import { SubmitHandler } from 'react-hook-form'
import { 
    useGetUserByEmailQuery,
    useUpdateUserMutation
} from '../../../../service/auth'
import { toast } from 'react-toastify'
import IUserNTV from '../../../../interface/user'
import ModalInformation from './ModalInformation'
import { 
    FormCareerGoal, 
    FormEducation, 
    FormInfor, 
    FormMoreInfo, 
    FormSkills, 
    FormWorkExp
} from './FormInformation'
import { useAppSelector } from '../../../../app/hook'
import { AvatarIcon } from '../icons'
import InformationComponent from './InformationComponent'

const forms = [
    {id: 1, component: FormInfor},
    {id: 2, component: FormCareerGoal},
    {id: 3, component: FormWorkExp},
    {id: 4, component: FormEducation},
    {id: 5, component: FormSkills},
    {id: 6, component: FormMoreInfo},
]

const Infotmation = () => {
    let Component = forms[0].component
    const [formProps, setFormProps] = useState<any>()
    const { email } = useAppSelector((res: any) => res.auth)
    const { data: user } = useGetUserByEmailQuery(email)

    if (formProps) {
        forms.map((form: any) => {
            if (formProps?.id === form?.id) {
                Component = form.component
                console.log(Component);
            }
        })
    }

    const [updateUser] = useUpdateUserMutation()
    const handleUpdate: SubmitHandler<IUserNTV> = async (userForm: IUserNTV) => {
        await updateUser({
            ...userForm
        }).then((res: any) => {
            const { data } = res
            if (data?.success) {
                toast.success('Cập nhật thành công')
            }
        })
    }

    return (
        <>
            <div className="">
                <section className='border-1 rounded bg-white'>
                    <h4 className='text-[#333333] text-[16px] py-3 px-4 font-[700]'>Hồ sơ của tôi</h4>
                </section>
                <label htmlFor="modal-form-check" 
                    className='flex flex-start w-100 border-1 rounded bg-white py-[20px] mt-[8px] px-[24px]'
                    onClick={() => setFormProps({
                        title: "Thông tin cá nhân", 
                        id: 1
                    })}
                >
                    <div className="avatar-info">
                        {
                            user?.image === undefined ?
                            <AvatarIcon /> :
                            <div 
                                style={{backgroundImage: `url(${user?.image})`}}
                                className='avatar-img-info'
                            />
                        }
                    </div>
                    <section className='ml-[24px]'>
                        <h4 className="infor-name">{user?.name}</h4>
                        <section className="flex flex-wrap items-center w-100">
                            <span className='w-[50%]'>
                                <i className="fa-solid fa-briefcase mr-[8px]"></i>
                                {user?.career ? "" : "Thêm vị trí ứng tuyển"}
                            </span>
                            <span className='w-[50%]'>
                                <i className="fa-solid fa-graduation-cap mr-[8px]"></i>
                                {user?.education ? "" : "Thêm bằng cấp hiện tại"}
                            </span>
                            <span className='w-[50%]'>
                                <i className="fa-solid fa-envelope mr-[8px]"></i>
                                {user?.email}
                            </span>
                            <span className='w-[50%]'>
                                <i className="fa-solid fa-phone mr-[8px]"></i>
                                {user?.phone}
                            </span>
                            <span className='w-[50%]'>
                                <i className="fa-solid fa-house mr-[8px]"></i>
                                {user?.specific_address + ', ' + user?.district + ', ' + user?.province}
                            </span>
                        </section>
                    </section>
                </label>
                <InformationComponent
                    id={2}
                    title={"Mục tiêu nghề nghiệp"}
                    desc={"Giới thiệu bản thân và miêu tả mục tiêu nghề nghiệp của bạn"}
                    btn_value={"Thêm Mục Tiêu Nghề Nghiệp"}
                    onClick={({title, id}: any) => setFormProps({title, id})}
                />
                <InformationComponent
                    id={3}
                    title={"Kinh nghiệm làm việc"}
                    desc={"Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt, điều đó giúp bạn có cơ hội hiển thị nhiều hơn trong kết quả tìm kiếm"}
                    btn_value={"Thêm Kinh Nghiệm Làm Việc"}
                    onClick={({title, id}: any) => setFormProps({title, id})}
                />
                <InformationComponent
                    id={4}
                    title={"Học vấn"}
                    desc={"Mô tả toàn bộ quá trình học vấn của bạn, cũng như các bằng cấp bạn đã được và các khóa huấn luyện bạn đã tham gia"}
                    btn_value={"Thêm Học vấn"}
                    onClick={({title, id}: any) => setFormProps({title, id})}
                />
                <InformationComponent
                    id={5}
                    title={"Kỹ năng"}
                    desc={"Trong phần này, bạn nên liệt kê các kỹ năng phù hợp với vị trí hoặc lĩnh vực nghề nghiệp mà bạn quan tâm."}
                    btn_value={"Thêm Kỹ Năng"}
                    onClick={({title, id}: any) => setFormProps({title, id})}
                />
                <InformationComponent
                    id={6}
                    title={"Thông tin thêm"}
                    desc={"Điền thông tin thêm nếu có"}
                    btn_value={"Thêm Thông Tin"}
                    onClick={({title, id}: any) => setFormProps({title, id})}
                />
            </div>
            <ModalInformation title={formProps?.title}>
                <Component onSubmit={handleUpdate} />
            </ModalInformation>
        </>
    )
}
export default Infotmation