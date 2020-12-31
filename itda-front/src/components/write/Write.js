import { useState, useCallback } from 'react';
import { Input, Select, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import BreadCrumb from '../common/BreadCrumb';

import { flagList } from '../../lib/flagList';
const { Option } = Select;

export default function Write({ category, title, content, tags, flag, onChangeField, onSubmit, postId }) {
  const [currentFlag, setCurrentFlag] = useState(flag ? flagList[flag] : flagList[0]);
  const handleEditorChange = (content, editor) => {
    // console.log('Content was updated:', content);
    onChangeField({ key: 'board_content', value: content });
  };

  const onChangeTitle = (e) => {
    onChangeField({ key: 'board_title', value: e.target.value });
  };

  const onChangeFlag = (value) => {
    if (!value) value = 0;
    console.log(value);
    onChangeField({ key: 'board_category_cd', value });
  };

  const onChangeTag = (e) => {
    // console.log(e.target.value);
    onChangeField({ key: 'board_tag', value: e.target.value });
  };

  const currentLoc = useCallback((category) => (category ? `#${category}/` : ''), [category]);

  return (
    <article className='l-main'>
      <BreadCrumb path={`질문하기/${currentLoc(category)}게시글 작성`} />
      <h2 className='question-tit'>게시글 작성</h2>

      <form className='question-form' onSubmit={onSubmit}>
        {/* 제목 */}
        <div className='question-form__row'>
          <label className='question-form__label question-form__label--required' htmlFor='board__title'>
            제목
          </label>
          <p className='question-form__desc'>다른 여행자들이 이해하기 쉽도록 구체적으로 작성 해 주시면 좋아요:)</p>
          <Input id='board__title' onChange={onChangeTitle} value={title} />
        </div>
        {/* // 제목 */}

        {/* flag */}
        <div className='question-form__row'>
          <label className='question-form__label question-form__label--required' htmlFor='flag'>
            Flag
          </label>
          <p className='question-form__desc'>게시물의 Flag를 정해 주세요:)</p>
          <Select className='question-form__select' defaultValue={currentFlag} onChange={onChangeFlag}>
            {flagList.map((flag, idx) => (
              <Option key={idx.toString()} value={idx}>
                {flag}
              </Option>
            ))}
          </Select>
        </div>
        {/* // flag */}

        {/* 본문 */}
        <div className='question-form__row'>
          <label className='question-form__label question-form__label--required'>본문</label>
          <p className='question-form__desc'>다른 여행자들이 이해하기 쉽도록 구체적으로 작성 해 주시면 좋아요:)</p>
          <Editor
            initialValue={content}
            init={{
              height: 500,
              menubar: false,
              statusbar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
          />
        </div>

        {/* // 본문 */}

        {/* 태그 */}
        <div className='question-form__row question-form__row--last'>
          <label className='question-form__label question-form__label--required' htmlFor='board_tag'>
            태그
          </label>
          <p className='question-form__desc'>
            게시물과 관련있는 커뮤니티의 태그를 모두 입력 해 주세요, 게시물에 대해 더 풍부한 피드백을 기대할 수
            있습니다:)
          </p>
          <Input id='board_tag' value={tags} placeholder='Ex) #Java #python #node.js #html' onChange={onChangeTag} />
        </div>
        {/* // 태그 */}
        <Button htmlType='submit' type='primary'>
          {postId ? '수정' : '게시'}
        </Button>
      </form>
    </article>
  );
}
