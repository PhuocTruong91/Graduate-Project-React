import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

function App() {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		axios.get(`https://graduate-nodejs.herokuapp.com/products`)
		.then(res => {
			console.log(res)
			const persons = res.data.result;
			setData(persons)
	  })
	})

	var Container = styled.div`
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		.item{
			flex: 1;
			border: 1px solid black;
			border-radius: 3px;
			margin-right: 5px;
			padding: 5px;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			img{
				max-width: 100px;
			}
			&:hover{
				background: #82b8e4;
			}
		}
	`

  	return (
		<Container>
			{
				data ? data.map((item) => 
					<div class="item">
						<p>{item.name}</p>
						<p>{item.store}</p>
						<p>{item.img}</p>
						<p>{item.price}</p>
					</div>
				) : ''
			}
		</Container>
  	);
}

export default App;
