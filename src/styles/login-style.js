import styled from 'styled-components';

const fotoNormal = 'url(\'https://lh3.googleusercontent.com/OYxIXMYKcWWPCUzyOTX7mZlihqd6PwcuCdtilGC1Bur5Tu51SigKy9LWiNXu980qDQbO4iNCKS1anwTM5LlUsOjTSNF-JVCQoHYooysdC9vLRz5LIi4GFGNTbOryOlwjpag5tI2mc8rQ_j1OkZT0OJetIhg6lazgw9F7Ykt66bt8m0bPOOCB5Sr3sddyf3QxP4mXlhBrGPIrzdNwF9uqXgmRys7OpHuYZdQ260tLS5akmbQr4QN1E3C5GCCi4EsE7kWl0SV6zqJ53-xv3zPkmMMeZrAiUvjV9i1DPjqgYGQTcIqcfOSkJAEVy1XPyvkNMeAL5qfVM0KxFvP--N7UmFr7oHxiKpwuiP7viL8nQP86_rf6Y2eAohSU_pVHk_vkEp8rkGhTSKJR_3nbQZuGJx68oR4DPC6wLaSbVYgZnOdiZ0wqYIUJDTlHcIhafJL3HLasbBl33ALnua8AOSXEkdmtaEH8gzyvjOkYOk40gjfjUQApTDd2-IDOkxEQI81BR2bTsqw8MPbsFb5y8Nv-OH38R4akXI8LKIUdwDnKdBqOzEk72m4FmXUFRWCR8lJH-KltI_I0zj4n8L1-IL9YifSeav74Nl1AglV_zUKxbBO_xPaZav-Sy6KHMt8LjmsOmFKGrOzIekXMNVHigZJ-HPYxyGcGikp-26euioMA8Xy6kknwjg8rSBW9WF0ajBNAz-uOC7gzc76_ii5bcTDY4h3ptUWufLrJTCRmBkgodocT77f7j2gK1komzFKO=w360-h640-no?authuser=0\')';

const fotBorrada = 'url(\'https://lh3.googleusercontent.com/8ChijIOr0cHPP_5SC0kZr_TAStUMhc5Nm-UK0Kydgjpx11R1f7fnlV9w45qdHb5X2eZuj3Mmwoh5Cpcz9D1n5nrvCP0n78HoDdZ6s5DX5gD8DYVhPoA4aSTrQJCRL4705dVNNnLkcmPMx_IH0gjAPs-fEhxh41CsN5_XwKZuV7oyzIh2gZjeAHgp9e-dDcqCgceSHcqHoUbYW5o-qFHwl8KhxxXbLjqSSxOqI6fIsIZbXQtHrmq2SsbxrXNKP6D1yDyo2eba4ys7p4o3nScRtZsOm0Uj890CqfLtL_4tHxVN9TScCo6XSHu0XTeQKZa3bEfYOt9N7-oyl3_FXbKFJzvFgNtY0m4qygLZSm1J4Q5itO_7yxIxT45SSKawCDmcjETooUniDPlL1V5YCBJwlu81bHFQPLOXcwb0V8eGZueASPXemGUZwwapInLGMiK7f_xoJEp7RjYmnOmwunJlLztV2fA4e7IWJp6eCrbD-ukIXFFNwtnqge3WwFzc9J5z2Uw4yH2Nxa1wOuS52EGudGAixSqNXtUpe1RIu3z-4ZQH6O8XL7F9gWwNNz1hjs7P_pTZdmmeWGXNymm6F50uwSZXkeOv9JTAG_5JoN62-JKJkfTW_UxXW4gJryEnsSWXB_yBImD5c4K2qVWaHn7zZYbpdIirulrnRrDZVWhERJl7VCUjJ3gpJ9NeUogos6qWJ46FFgFLErpcQkTf15Nnc09uhvFVmH9bVPONkCxl-xer1vKwyeoAoNuh0VsK=w368-h648-no?authuser=0\')';

export const LoginBody = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: ${(props) => (props.clicked ? fotBorrada : fotoNormal)};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  background: var(--white);
  opacity: ${(props) => (props.clicked ? '100%' : '76%')};
  border: 1px solid var(--green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 75px;
  width: 262px;
  height: 186px;

  div {
    margin: 0 auto;
    position: relative;
  }
`;

export const LoginInput = styled.input`
  background: var(--white);
  opacity: 68%;
  border: 1px solid var(--green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: var(--black);
  width: 240px;
  height: 40px;
  padding-left: 32px;

  ::placeholder {
   color : var(--green);
  }
`;

export const LoginButton = styled.button`
  background: var(--green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: 74px;
  height: 40px;
  color: var(--black);
  margin: 12px auto;
`;

export const LoginImage = styled.img`
  position: absolute;
  left: 4px;
  top: 4px;
  width: 24px;
  height: 30px;
  z-index: 1;
`;
