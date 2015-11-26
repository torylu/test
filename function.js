var CommentList = React.createClass({
     render:function(){
       return (
         <div className="commentlist">
           I am commentlist
            <Comment author="Pete Hunt"> This is one comment</Comment>
            <Comment author="Jordan Walke">This is another comment</Comment>
         </div>
       );
}
});

var CommentForm= React.createClass({
     render:function(){
        return (
           <div className="commentform">I am commentform</div>
        );
}
});


var Comment =React.createClass({
     render:function(){
       return (
         <div className="comment">
            <h2 className="commentAuthor">
               {this.props.author }
            </h2>
               {this.props.author}
         </div>
);
}
});

var CommentBox = React.createClass({
     render: function(){
       return (
         <div className="commentBox">
            Hello,world!
            <CommentList/>
            <CommentForm/>
         </div>
       );
}
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')	
);
