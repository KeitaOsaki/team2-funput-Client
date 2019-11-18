import React ,{useState} from 'react';
import {postWorksDataRequest} from '../../actions/Works/ActionCreator';
import {useDispatch } from 'react-redux';
import '../../styles/FormWorkData.css'


const FormWorkData = () => {
  const dispatch = useDispatch();
  const [workPostTitle, setworkPostTitle] = useState('');
  const onWorkPostTitleChange = (e) =>{
    setworkPostTitle(e.currentTarget.value);
  }
  const [workPostComment, setworkPostComment] = useState('');
  const onWorkPostComment = (e) =>{
    setworkPostComment(e.currentTarget.value);
  }
  const handleClickSubmitt = function(e){
    e.preventDefault();
    if(workPostTitle==''|| workPostComment==''){
      return;
    }
    const worksData = [workPostTitle, "file_url", workPostComment];
    dispatch(postWorksDataRequest(worksData));
    setworkPostTitle("");
    setworkPostComment("");
  }

  return (

    <div id="formWorkData">
      <div className="container">
          <div id="wpt">
            <div>
              <input id="workPostTitle" type="text" value={workPostTitle} onChange={onWorkPostTitleChange} placeholder='作品名'></input>
            </div>
          </div>
          <div id="wpc">
            <div>
              <textarea id = "workPostComment" value={workPostComment} onChange = {onWorkPostComment} placeholder='作品名に関するコメント'></textarea>
            </div>
          </div>
          <input id = 'submit' type="submit" value="投稿する" onClick={ handleClickSubmitt}/>
      </div>
    </div>
  )
}

export default FormWorkData;