import React from 'react'
import ControlledCarousel from './../../Components/Slider/slider'
import Chips from './../../Components/Chips/chips'
import RecipeReviewCard from './../../Components/cards/cards'
import Grid from '@material-ui/core/Grid';
import Appbar from './../../Components/Appbar/appbar';

import image1 from './../../images/download (1).jpg'
import image2 from './../../images/download (2).jpg'
import image3 from './../../images/20713_azhar4.jpg'
import image4 from './../../images/download (3).jpg'
import image5 from './../../images/download (7).jpg'
import image6 from './../../images/download (4).jpg'
import image7 from './../../images/download (6).jpg'
import image8 from './../../images/download_5_1_200x300.jpg'
import image9 from './../../images/nload.jpg'
import image10 from './../../images/download (8).jpg'
import image0 from './../../images/andrewwattsadinsert-1.jpg'









 

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            myCart:[]
        }
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem("myCart"))){
            this.setState({
                myCart:JSON.parse(localStorage.getItem("myCart")),
            })
        }
    }
    render(){
        return(
            <div>
        <Appbar myCart={this.state.myCart}/>        

      <ControlledCarousel/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img src={image0}  style={{
          borderRadius:"10px",
          height:"198px",
          width:"1348px",
          
        }} /> 
       <br/>
      <br/>
      <br/>


     <center    style={{
         backgroundColor:"gray",
         
         color:"white",
         fontSize:"10px"
        }}> <h3> latest Books</h3></center>



        <Chips/>
  <br/>
  <br/>



        
<RecipeReviewCard
about="I Am Malala: The Story of the Girl Who Stood Up for Education and was Shot by 
the Taliban is an autobiographical book by Christina Lamb.
"
title="I am Malala ; Biography"
onClick={this.props.history}
image={image1}
price=""
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Main aur mera pakistan"
onClick={this.props.history}
price="200$"
image={image2}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Nawaz Sharif Ka Siyasi Safar"
onClick={this.props.history}
price="300$"
image={image3}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Shrimp and Chorizo Paella"
onClick={this.props.history}
price="300$"
image={image4}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Munhjo sahra sudke tho"
onClick={this.props.history}
price="300$"
image={image5}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Shrimp and Chorizo Paella"
onClick={this.props.history}
price="300$"
image={image6}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Shrimp and Chorizo Paella"
price="300$"
image={image7}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Shrimp and Chorizo Paella"
onClick={this.props.history}
price="300$"
image={image8}
/>
<RecipeReviewCard
about="Shah Jo Risalo is a poetic compendium of famous Sindhi Sufi poet Shah Abdul Latif Bhittai. Originally published: 1961
Author: Shah Abdul Latif Bhittai
Original language: Sindhi"
onClick={this.props.history}
price="300$"
image={image9}
/>
<RecipeReviewCard
about="This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like."
title="Shrimp and Chorizo Paella"
onClick={this.props.history}
price="300$"
image={image10}
/>



            </div>
        )
    }
}