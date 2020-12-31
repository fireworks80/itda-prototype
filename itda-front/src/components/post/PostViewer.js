import moment from 'moment';
import BreadCrumb from '../common/BreadCrumb';
import LikeComponent from './LikeComponent';
import FlagComponent from './FlagComponent';
import TagComponent from './TagComponent';

import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'antd';
import { FormOutlined, MessageFilled, PaperClipOutlined, ShareAltOutlined } from '@ant-design/icons';

const PostViewer = ({ post, More }) => {
  if (!post) return null;

  const { board_title, board_category_cd, board_content, board_datetime, board_tag, board_comment_count } = post;

  return (
    <>
      <BreadCrumb path={'관심사/게시글 조회'} />
      <header>
        <h2 className='question-tit question-tit--ico'>
          #JAVA <span className='a11y'>질문 상세페이지</span>
          <FormOutlined />
        </h2>

        <p className='question-read__tit'>
          {board_title} <FlagComponent flagId={board_category_cd} />
        </p>
      </header>

      <section>
        <h3 className='a11y'>본문 내용</h3>

        <div className='question-writer'>
          <dl>
            {/* <div className='question-writer__row'>
              <dt className='question-writer__tit'>Created by</dt>
              <dd className='question-writer__desc'>
                <Avatar size='small' icon={<UserOutlined />} /> Hong gil dong
              </dd>
            </div> */}
            <div className='question-writer__row'>
              <dt className='question-writer__tit'>Last Updated</dt>
              <dd className='question-writer__desc question-writer__desc--date'>{moment(board_datetime).fromNow()}</dd>
            </div>
            <div className='question-writer__row'>
              <dt className='question-writer__tit'>Tags</dt>
              <dd className='question-writer__desc'>
                <TagComponent strTag={board_tag} />
              </dd>
            </div>
          </dl>
          {More}
        </div>

        {/* 내용 */}

        <Editor
          value={board_content}
          init={{
            toolbar: false,
            menubar: false,
            statusbar: false,
            height: 600,
            setup(editor) {
              editor.setMode('readonly');
            },
            readonly: true,
          }}
        />
        {/* // 내용 */}

        <div className='question-read__recommend'>
          <span className='recommend-con recommend-con--comment'>
            <MessageFilled />
            {board_comment_count} Comment
          </span>
          <LikeComponent />
          <Button type='text' className='recommend-con recommend-con--scrap'>
            <PaperClipOutlined />
            스크랩
          </Button>
          <Button type='text' className='recommend-con recommend-con--share'>
            <ShareAltOutlined />
            공유
          </Button>
        </div>
      </section>
    </>
  );
};

export default PostViewer;
