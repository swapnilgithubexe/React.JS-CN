//Blogging App using Hooks
import { useRef, useState, useEffect } from "react";
export default function Blog() {

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    useEffect(() => {
        titleRef.current.focus();
    }, [])


    const [formData, setFormData] = useState({ title: "", content: "" })
    const [blogs, setBlogs] = useState([]);
    const contentRef = useRef();
    const titleRef = useRef(null);


    //Passing the synthetic event as argument to stop refreshing the page on submit
    const removeBlogHandler = (index) => {
        setBlogs(blogs.filter((_, i) => i !== index)
        )
    }
    function handleSubmit(e) {
        e.preventDefault();
        const { title, content } = formData;
        setBlogs([{ title, content }, ...blogs])

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
                    <Row label="Content">
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
