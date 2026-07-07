import React from 'react'
import { useState,useEffect } from 'react'
function About() {
	let [data,setData]=useState([])
	console.log(data);
	let [show, setShow]= useState(true)
// console.log(show)

useEffect(()=>{
	// console.log("salom");

	async function getData() {
		try{

			let responce = await fetch('https://jsonbek.uz/api/posts?style=romance')

			if(!responce.ok){
				throw new Error("muammo")
			}
			let data = await responce.json()
			setData(data)
		}catch (error){	
			console.log(error);
		}
	}
	getData()
},[show])

	return (
		<div>
		<button onClick={()=> setShow(!show)} >click</button>	
		</div>
	)
}

export default About
