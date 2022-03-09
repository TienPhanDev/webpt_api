import React from "react";

function Profile(props) {
  return (
    <div className="w3-panel w3-card-2 w3-margin	">
      {props && (
        <>
          <p>Platform: {props.data.payload[0].platform}</p>
          <p>Region: {props.data.payload[0].region}</p>
          <p>Player ID: {props.data.payload[0].source_player_id}</p>
          <p>Source Character: {props.data.payload[0].source_character}</p>
          <p>Target Player ID: {props.data.payload[0].target_player_id}</p>
          <p>Target Character: {props.data.payload[0].target_character}</p>
          <p>Method: {props.data.payload[0].method}</p>
          <p className="w3-badge w3-red">
            Damage: {props.data.payload[0].damage}
          </p>
          <hr />
          <span className="w3-padding">
            <button>Start</button>
            <button>Reset</button>
          </span>
        </>
      )}
    </div>
  );
}

export default Profile;
