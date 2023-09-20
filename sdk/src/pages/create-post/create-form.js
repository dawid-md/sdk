import { useForm } from "react-hook-form"
import * as yup from "yup"  //library for schema validation
import { yupResolver } from '@hookform/resolvers/yup'   //library for combining yup and form

export const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description.")
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onCreatePost = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")} />
            <textarea placeholder="Description..." {...register("description")} />
            <input type="submit" />
        </form>
    )
}