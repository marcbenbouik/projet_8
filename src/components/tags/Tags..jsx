import "../tags/tags.css";

function Tags(props) {
      const tags = props.tags;
      return (
            <div className='tags'>
                  {tags.map((tag) => {
                        return <div key={tag}>{tag}</div>;
                  })}
            </div>
      );
}

export default Tags;
