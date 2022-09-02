import styled from "styled-components";

export const LoginContaine = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../../assets/Fundo.png");
    header{
        width: 100%;
        max-width: 1800px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-primary);
        width: 100%;
        height: 100%;
        min-height: 120px;
    }
    h1{
        text-align: center;
        color: #ffffffff;
        font-size: 40px;
        line-height: 40px;
    }
    main{
        width: 100%;
        max-width: 1200px;
        display: flex;
        gap: 5rem;
        padding: 1rem;
        justify-content: space-between;
        margin: 2rem 5rem 5rem;
    } 
 
     @media(max-width: 920px){
        main{
            gap:2rem;
            margin:1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
    } 
    .cantaineForm{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         width: 100%;
         max-width: 499px;
         gap: 22px;
         min-height: 412px;
         padding: 2rem 1rem;
         background: #FFFBFB;
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 13px rgba(0, 0, 0, 0.25);
   }
  
   form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
   }
  .InputContaine{
    width: 100%;
    text-align: start;
  }
   input{
    width: 100%;
    height: 49px;
    padding: 0 1rem;
    color: #000000;
    background-color: var(--gray-100);
   }
   p{
    color: red;
   }
   button{
        width: 100%;
        max-width: 345px;
        height: 44px;
        border-radius: 10px;
        font-size: 26px;
        background-color: var(--color-primary);
        color: #ffffffff;
   }
   p{
    color: grey;
   }
 nav{
    display: flex;
 }
`
