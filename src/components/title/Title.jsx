import "../title/title.scss";
function Title(props) {
      const title = props.title;
      const locate = props.locate;
      return (
            <div className='title'>
                  <h1>{title}</h1>
                  <p>{locate}</p>
            </div>
      );
}

export default Title;
