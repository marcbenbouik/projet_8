import "../host/host.scss";

function Host(props) {
      const host = props.host;
      //   const picture = props.picture;
      return (
            <div className='host'>
                  <p>{host.name}</p>
                  <img src={host.picture} alt='host profile' />
            </div>
      );
}

export default Host;
