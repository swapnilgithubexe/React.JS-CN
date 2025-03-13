//Blogging App using Hooks
import { useRef, useState, useEffect, useReducer } from "react";
import { db } from "../firebaseinit.js";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

const blogsReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [action.blog, ...state]

        case "REMOVE":
            return state.filter((blog, i) => i !== action.index)

        case "SET_BLOGS":
            return action.blogs;

        default:
            return [];
    }
}
export default function Blog() {

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("")


    const [formData, setFormData] = useState({ title: "", content: "" })
    // const [blogs, setBlogs] = useState([]);
    const [blogs, dispatch] = useReducer(blogsReducer, [])
    const contentRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.focus();
        document.title = blogs.length > 0 ? blogs[0].title : "No Blogs"
    }, [blogs])

    useEffect(() => {
        // const fetchData = async () => {

        //     const docSnap = await getDocs(collection(db, "blogs"))
        //     const blogs = docSnap.docs.map((item, i) => {
        //         return {
        //             id: item.id,
        //             ...item.data()
        //         }

        //     })
        //     // setFormData({ title: blogs.title, content: blogs.content })
        //     // console.log(blogs);
        //     dispatch({ type: "SET_BLOGS", blogs: blogs })

        // }
        // fetchData();

        const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
            const blogs = snapshot.docs.map((item) => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            dispatch({ type: "SET_BLOGS", blogs: blogs })
        })
    }, [])


    //Passing the synthetic event as argument to stop refreshing the page on submit
    const removeBlogHandler = (index) => {
        dispatch({ type: "REMOVE", index: index })

    }
    async function handleSubmit(e) {
        e.preventDefault();
        // setBlogs([{ title, content }, ...blogs])
        dispatch({ type: "ADD", blog: { title: formData.title, content: formData.content } })
        const docRef = await addDoc(collection(db, "blogs"), {
            title: formData.title,
            content: formData.content,
            createdAt: new Date()
        })
        setFormData({ title: "", content: "" })

        contentRef.current.value = ""
        titleRef.current.value = ""
        titleRef.current.focus();


    }

    return (
        <>
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>

            {/* Division created to provide styling of section to the form */}
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>

                    {/* Row component to create a row for first input field */}
                    <Row label="Title">
                        <input ref={titleRef}
                            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} className="input"
                            placeholder="Enter the Title of the Blog here.." />
                    </Row >

                    {/* Row component to create a row for Text area field */}
                    <Row required label="Content">
                        <textarea ref={contentRef}
                            onChange={(e) => setFormData((prev) => ({
                                ...prev, content: e.target.value
                            }))} className="input content"
                            placeholder="Content of the Blog goes here.." />
                    </Row >

                    {/* Button to submit the blog */}
                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {
                blogs.map((item, index) => (
                    <div className="blog" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <div className="blog-btn">
                            <button onClick={() => removeBlogHandler(index)} className="btn remove">Delete</button>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}
