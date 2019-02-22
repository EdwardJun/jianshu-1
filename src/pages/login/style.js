import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 700ps;
  width: 100%;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 500px
  margin: 100px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  overflow: hidden;
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 30px auto 0;
`

export const Button = styled.div`
  width: 220px;
  height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  margin: 30px auto;
  cursor: pointer;
`