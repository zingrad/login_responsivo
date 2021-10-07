import styled from "styled-components";
//#FF6C22;



export const Card = styled.div`
    position: absolute;
    width: 53.5625rem;
    height: 32rem;
    left:  25rem;
    top: 9.375rem;

    background: #FFFFFF;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    
    .notebook{
        position: absolute;
        top: 6.25rem;
        left:48%;
    }
    .fundo{
    position: absolute;
    top: 0px;
    left: 55%;
    }
    .input1{
        margin-top: 30%;
       
        
    }
    .icon{
            position: absolute;
            bottom: 27%;
            left: 41%;
        }
   
    input{
    display :flex ;
    border-radius: 0.50;
    margin-left: 4.375rem;
    width: 19.5625rem;
    height: 2.75rem;
    margin-top: 0.625rem;
    
    }
    button{
        margin-top: 10px;
        margin-left: 4.375rem;
        background-color:  #2EAFB2;
        width: 160px;
        height: 50px;
        border-radius: 5px;
    }

     



        //tablet

    @media (max-width:798px){
        display: flex;
        align-items: center;
        position: absolute;
        left:0;
        width: 100%;
        
        
        .notebook{
            display: none;
            
        }
        .fundo{
            display: none;
        }
        .icon{
            position: relative;
            top: 25%;
           left: 29%;
           z-index: 1;
            
        }
        input{
            position: absolute;
            margin-left:10rem;
            left:90px;
            margin-top: 16rem;
            
            
        }
        
        
        .input1{
            margin-top: 115px;
        }
        button{
            position: absolute;
            left: 250px;
            bottom: 25px;
        }

           
            
        

           //mobile
    @media (max-width:600px){
        display: flex;
        align-items: center;
        position: absolute;
        left:0;
        width: 100%;
        
        
        .notebook{
            display: none;
            
        }
        .fundo{
            display: none;
        }
        .icon{
            position: relative;
            top: 25%;
           left: 15%;
           z-index: 1;
        
        }
        input{
            position: absolute;
            margin-left:10rem;
            left:-40px;
            margin-top: 16rem;
            
            
        }
        
        
        .input1{
            margin-top: 115px;
        }
        button{
            position: absolute;
            left: 90px;
            bottom: 25px;
        }

       
    }

   

        
    }

    
`

export const Painel = styled.div`

h3{
    position: relative;
    font-family: Advent Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    margin-left: 4.375rem;
    top: 13rem;
    
    

    

    color: rgba(0, 0, 0, 0.44);
    span{
        color:#FF6C22;
    }
    }

    img{
        position: absolute;
        top: 5rem;
        margin-left: 6rem;
    }
   

    //tablet
    @media (max-width:798px){
        img{
            position: absolute;
            top: 2;
           left:150px;
        }
        h3{
            position: relative;
            top:-20px;
            left: 210px;
        }

         //mobile
    @media (max-width:600px){
        img{
            position: absolute;
            top: 2;
           left:10px;
        }
        h3{
            position: relative;
            top:-20px;
            left: 60px;
        }
       
    }

       
    }
        `