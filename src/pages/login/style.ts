import styled from "styled-components";

export const LoginContaine = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header{
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--blue);
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
        display: flex;
        justify-content: center;
        padding: 2rem;
        margin: auto;
    } 
    @media(min-width:480px){
        main{
            gap: 15rem;
        }
    }
    @media(max-width: 480px){
        main{
            flex-wrap: wrap;
        }
    }
    .cantaineForm{
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;
         max-width: 499px;
         gap: 22px;
         height: 412px;
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
   label, input{
    width: 100%;
   }
   label{
    font-size: 20px;
    color: var(--grey);
   }
   input{
    width: 100%;
    height: 49px;
    padding: 0 1rem;
    color: #000000;
    background-color: var(--grey);
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
        background-color: var(--blue);
        color: #ffffffff;
   }
   span{
    color: grey;
   }
`