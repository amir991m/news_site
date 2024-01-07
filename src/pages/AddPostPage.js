import React, { useState } from "react"
import { SAddPostForm } from "../styles/AddPost.styled"
import { useAddPostMutation } from "../features/api/apiSlice"

const AddPostPage = () => {
  const [category, setCategory] = useState("news")
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [image, setImage] = useState("")

  const [addPost] = useAddPostMutation()

  const onSavePostClicked = (e) => {
    e.preventDefault()
    if (category && title && text) {
      addPost({
        category: category,
        title: title,
        text: text,
        date: new Date(),
      })
    }
  }

  const imageSelected = (e) => {
    //console.log(e.target.files[0]);
    setImage(e.target.files[0])
  }

  const canSave = Boolean(category) && Boolean(title) && Boolean(text)
  //console.log(category);
  //console.log(text);
  //console.log(title);

  return (
    <>
      <SAddPostForm>
        <label>
          Title:
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Text:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="news">News</option>
            <option value="world">World</option>
            <option value="economy">Economy</option>
            <option value="sport">Sport</option>
            <option value="culture">Culture</option>
            <option value="technology">Technology</option>
          </select>
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={imageSelected} />
        </label>
        <br />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Submit
        </button>
      </SAddPostForm>
    </>
  )
}

export default AddPostPage
