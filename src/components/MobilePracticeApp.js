'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.less');

// 加载数据
var newsData = require('../data/dataOne.js');

newsData = (function addNewImg(imageDataArr) {
	for(var i = 0; i < imageDataArr.length; i++){
		var singleImgData = imageDataArr[i];

		singleImgData.imageURL = require('../images/' + singleImgData.fileName);

		imageDataArr[i] = singleImgData;
	}
	return imageDataArr;
})(newsData);

var ImgFigure = React.createClass({

	handleClick: function(e){
			this.props.inverse();

			e.stopPropagation();
			e.preventDefault();
	},

	render: function() {
		var ImgFigureClassName = 'img-figure';
		ImgFigureClassName += this.props.arrage.isInverse ? ' is-inverse ' : '';
		return (
				<figure className={ImgFigureClassName} onClick={this.handleClick}>
					<img src={this.props.data.imageURL} className="new-img"/>
					<figcaption>
						<h2 className="img-title">{this.props.data.title}</h2>
					<div className="img-back" onClick={this.handleClick}>
						<p>{this.props.data.content}</p>
					</div>
					</figcaption>
				</figure>
			);
	}
});

var MobilePracticeApp = React.createClass({

	/*
     *图片翻转状态控制
     */
    inverse: function(index){
		return function () {
			var imgsArrangeArr = this.state.imgsArrangeArr;

			imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});

		}.bind(this);
    },

// 图片的翻转状态信息
	getInitialState: function(){
		return {
			imgsArrangeArr: [
			/*
				{
					isInverse: false
				}
			*/
			]
		};
	},
	render: function() {
		var ImgFigures = [];
			newsData.forEach(function(value, index){

				if(!this.state.imgsArrangeArr[index]){
					this.state.imgsArrangeArr[index] = {
						inInverse: false
					};
				}
				ImgFigures.push(<ImgFigure data={value} arrage={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)}/>);
			}.bind(this));
		return (
			<div className="subject">
				{ImgFigures}
			</div>
		);
	}
});
React.render(<MobilePracticeApp />, document.getElementById('content')); // jshint ignore:line

module.exports = MobilePracticeApp;
