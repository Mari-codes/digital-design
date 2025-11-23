import Card from '../Card';
import styles from './WorkExperienceSection.module.scss';

export default function WorkExperienceSection() {
    return (
        <section className={styles["work-experience"]}>
            <div className={styles["work-experience__intro"]}>
                <h2 className={styles["work-experience__title"]}>Experiências De Trabalho</h2>
                <p className={styles["work-experience__text"]}> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className={styles["work-experience__cards"]}>
                <Card
                    date="JUNHO 2012 - 2016"
                    role="Web Designer"
                    company="Pied Piper StartUp."
                    description="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    date="AGOSTO 2016 - 2019"
                    role="Product Designer"
                    company="E Corp."
                    description="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card
                    date="FEVEREIRO 2019 - 2021"
                    role="Digital Consulting"
                    company="Arasaka Inc."
                    description="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    );
}