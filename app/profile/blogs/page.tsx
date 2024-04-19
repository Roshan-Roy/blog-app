import BlogCardProfileCover from "@/components/blogcardprofilecover/BlogCardProfileCover"
import BlogCardProfileNoCover from "@/components/blogcardprofilenocover/BlogCardProfileNoCover"
import styles from "./page.module.css"

const BlogsPage = () => {
  return (
      <div className={styles.container}>
         <BlogCardProfileCover/>
         <BlogCardProfileNoCover/>
         <BlogCardProfileCover/>
         <BlogCardProfileCover/>
      </div>
  )
}

export default BlogsPage