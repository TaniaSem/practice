import  posts from '../../postsData.json';
import { AdditionalBox, Image, Item, List, TextBox } from './PostsList.styled';

export const PostsList = () => {
  const postsList = posts;
  return (
    <List>
      {postsList.map(post => (
        <Item key={post.id}>
         {/* image */}
          <Image>X</Image> 
          <TextBox>
            <b>{post.author}</b>
            <p>{post.text}</p>
            <AdditionalBox>
                <p>Likes:{post.likes}</p>
                <p>Comments:{post.comments}</p>
            </AdditionalBox>
          </TextBox>
        </Item>
      ))}
    </List>
  );
};
