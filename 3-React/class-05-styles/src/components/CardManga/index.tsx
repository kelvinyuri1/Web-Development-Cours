import { Container } from "../../style";

type Props = {
    link: String;
    title: String;
}
export function CardManga({ title, link}:Props) {

    return (
      <Container>
       <div>
        <img src={link} />
        <figcaption>{title}</figcaption>
       </div>
      </Container>
    );
}