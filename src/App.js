import { useState } from "react";
import { Button } from "./Components/Button";
import { CountryList } from "./Components/CountryList";
import { CityList } from "./Components/CityList";
import { Form } from "./Components/Form";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [cpf, setCpf] = useState("")

  return (
    <form onSubmit={() => { }}>
      <main className="main-container">
        <section className="container">

          <h1>Dados Pessoais</h1>

          <Form
            label="Nome"
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Form
            label="Email"
            type="email"
            placeholder="username@provedor.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Form
            label="Telefone"
            type="tel"
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            placeholder="00 12345-6789"
            value={tel}
            onChange={e => setTel(e.target.value)}
          />

          <Form
            label="CPF"
            type="text"
            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
            placeholder="XXX.XXX.XXX-XX"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
        </section>

        <section className="container">

          <h1>Dados de Interesse</h1>

          <CountryList
            id="country"
            name="country"
          />

          <CityList
            id="city"
            name="city"
          />

          <span>Para selecionar mais de uma opção ou desmarcar alguma individualmente,
            mantenha o "CTRL" pressionado ao clicar.</span>
        </section>
      </main>

      <Button
        className="btn"
        title="Enviar" />

    </form>
  )
}

export default App;
