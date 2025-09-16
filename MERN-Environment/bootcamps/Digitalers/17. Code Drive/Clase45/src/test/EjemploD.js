class Mailer
{
    sendMail()
    {
        return "Enviando mail...";
    }
}

class ApiClient
{
    constructor(mailer)
    {
        /**
         * Crea el mailer DENTRO DE LA CLASE
         */
        this.mailer = mailer
    }

    async all()
    {
        this.mailer.sendMail();
    }
}

class ComponenteReact
{
    constructor(mailer)
    {
        /**
         * Crea el mailer DENTRO DE LA CLASE
         */
        this.mailer = mailer
    }

    render()
    {
        this.mailer.sendMail();
    }
}

class ApiClient1
{
    constructor(mailer)
    {
        /**
         * Crea el mailer DENTRO DE LA CLASE
         */
        this.mailer = mailer
    }

    async all()
    {
        this.mailer.sendMail();
    }
}

class ComponenteReact1
{
    constructor(mailer)
    {
        /**
         * Crea el mailer DENTRO DE LA CLASE
         */
        this.mailer = mailer
    }

    render()
    {
        this.mailer.sendMail();
    }
}

const mailer = new Mailer();

(new ApiClient(mailer)).all();
(new ComponenteReact(mailer)).render();
(new ApiClient1(mailer)).all();
(new ComponenteReact1(mailer)).render();