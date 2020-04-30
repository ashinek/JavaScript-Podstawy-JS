var UserTable = React.createClass({
	render: function(){
		return (
			<h2>to jest</h2>
		);
	}
});

var UserSearchBart = React.createClass({
	render: function(){
		return (
			<div className="card userSearch">
				<form class="form-inline">
					<div class="form-group">
						<input type="search" class="form-control" />
						<button type="submit" class="btn btn-default">Szukaj</button>	
					</div>
				</form>
			</div>
		);
	}
})

ReactDOM.render(<UserTable />, document.getElementById('content'));

