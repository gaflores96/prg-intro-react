function Contacto() {
  return (
    <form>
        <h1>Contacto</h1>
        <label for="email">Correo electrónico</label>
        <br />
        <input id="email" type="email" required />
        <br /><br />

        <label for="mensaje">Mensaje</label><br />
        <br />
        <textarea id="mensaje"></textarea>
        <br /><br />
        <button type="submit">Enviar</button>
    </form>
  );
}

export default Contacto