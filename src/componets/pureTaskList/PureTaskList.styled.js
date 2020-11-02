import styled, { css } from 'styled-components';
import {PureTaskList} from './PureTaskList';


export default styled(PureTaskList).attrs({})`

	.list-heading {
	  letter-spacing: .3em;
	  text-indent: .3em;
	  text-transform: uppercase;
	  font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
	  font-weight: 800;
	  font-size: 11px;
	  padding-left: 15px;
	  line-height: 40px;
	  background: #f8f8f8;
	  color: #aaa;
	}
	.list-heading .icon-sync {
	  opacity: 1;
	  animation: spin 2s infinite linear;
	  display: inline-block;
	  margin-right: 4px;
	}
	.list-item {
	  font-size: 14px;
	  line-height: 20px;
	  display: flex;
	  flex-wrap: wrap;
	  height: 3rem;
	  width: 100%;
	  background: white;
	  transition: all ease-out 150ms;
	}
	.list-item .title {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  flex: 1;
	}
	.list-item input[type="text"] {
	  background: transparent;
	  width: 100%;
	}
	.list-item input[type="text"]:focus {
	  cursor: text;
	}
	.list-item .actions {
	  transition: all 200ms ease-in;
	  padding-right: 20px;
	}
	.list-item .actions a {
	  display: inline-block;
	  vertical-align: top;
	  text-align: center;
	  color: #eee;
	}
	.list-item .actions a:hover {
	  color: #2cc5d2;
	}
	.list-item .actions a:active {
	  color: #555;
	}
	.list-item .actions [class^="icon-"] {
	  font-size: 16px;
	  line-height: 24px;
	  line-height: 3rem;
	  text-align: center;
	}
	.list-item.TASK_PINNED .icon-star {
	  color: #2cc5d2;
	}
	.list-item.TASK_ARCHIVED input[type="text"] {
	  color: #aaa;
	}
	.list-item:hover {
	  background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
	}
	.list-item:hover .checkbox {
	  cursor: pointer;
	}
	.list-item + .list-item {
	  border-top: 1px solid #f0f9fb;
	}
	.list-item.checked input[type="text"] {
	  color: #ccc;
	  text-decoration: line-through;
	}
	.list-item.checked .delete-item {
	  display: inline-block;
	}
	.loading-item {
	  height: 3rem;
	  width: 100%;
	  background: white;
	  display: flex;
	  align-items: center;
	  line-height: 1rem;
	  padding-left: 16px;
	}
	.loading-item .glow-checkbox,
	.loading-item .glow-text span {
	  animation: glow 1.5s ease-in-out infinite;
	  background: #eee;
	  color: transparent;
	  cursor: progress;
	  display: inline-block;
	}
	.loading-item .glow-checkbox {
	  margin-right: 16px;
	  width: 12px;
	  height: 12px;
	}
	.loading-item + .loading-item {
	  border-top: 1px solid #f0f9fb;
	}
	.list-items {
	  position: relative;
	  background: white;
	  min-height: 288px;
	}
	.list-items .select-placeholder {
	  border: none;
	  width: 48px;
	}
	
	.wrapper-message {
	  position: absolute;
	  top: 45%;
	  right: 0;
	  bottom: auto;
	  left: 0;
	  width: auto;
	  height: auto;
	  transform: translate3d(0, -50%, 0);
	  text-align: center;
	}
	.wrapper-message [class^="icon-"],
	.wrapper-message [class*=" icon-"] {
	  font-size: 48px;
	  line-height: 56px;
	  color: #2cc5d2;
	  display: block;
	}
	.wrapper-message .title-message {
	  font-size: 16px;
	  line-height: 24px;
	  font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
	  font-weight: 800;
	  color: #555;
	}
	.wrapper-message .subtitle-message {
	  font-size: 14px;
	  line-height: 20px;
	  color: #666;
	}
	
`;