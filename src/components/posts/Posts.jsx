import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Trong Tuan",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUvIj8tIlcc6MemlkLaXGlOLNplzf-3euA&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti aspernatur dignissimos delectus consequatur, esse nemo porro quidem perspiciatis laudantium odit obcaecati dolorum? Tenetur sequi nulla exercitationem, et sapiente dolore!",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Tuan 2",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis qui temporibus officiis obcaecati dolores inventore quas, aut quos est recusandae nemo dolorem sapiente ab. Voluptates amet obcaecati numquam ea.",
    },
    {
      id: 3,
      name: "Trong Tuan 2",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAUvIj8tIlcc6MemlkLaXGlOLNplzf-3euA&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti aspernatur dignissimos delectus consequatur, esse nemo porro quidem perspiciatis laudantium odit obcaecati dolorum? Tenetur sequi nulla exercitationem, et sapiente dolore!",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
