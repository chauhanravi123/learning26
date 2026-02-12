import React from 'react'

export const CardComponent = (props) => {
  return (
    <div class="container mt-5">
        <div class="card" style={{width: "18rem", margin:"0 auto"}}>
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="image" style={{width:287,height:250}}/>
            <div class="card-body">
                <h5 class="card-title">{props.title || 'Title'}</h5>
                <p class="card-text">{props.description || 'Description'}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  );
};
