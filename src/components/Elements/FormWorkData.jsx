import React from 'react';
import {postWorksDataRequest} from '../../actions/Works/ActionCreator';
import {useDispatch } from 'react-redux';
import '../../styles/FormWorkData.css'


const FormWorkData = () => {
  const dispatch = useDispatch();
  const handleClickSubmitt = function(e){
    e.preventDefault();
    const workPostTitle = document.getElementById("wpt");
    const workPostComment = document.getElementById("wpc");
    const worksData = [workPostTitle.value, "file_url", workPostComment.value];
    console.log(worksData);
    console.log(workPostTitle.value);
    console.log(workPostComment.value);
    dispatch(postWorksDataRequest(worksData));
    workPostTitle.value="";
    workPostComment.value="";
  }

  return (

    <div id="formWorkData">
      <div className="container">
        <form>
          <div id="workPostTitle">
            <div>
              <input type="text" id="wpt" placeholder='作品名'></input>
            </div>
          </div>
          <div id="workPostComment">
            <div>
              <textarea id="wpc" placeholder='作品名に関するコメント'></textarea>
            </div>
          </div>
          <input id = 'submit' type="submit" value="投稿する" onClick={ handleClickSubmitt}/>
        </form>
      </div>
    </div>
  )
}

export default FormWorkData;
