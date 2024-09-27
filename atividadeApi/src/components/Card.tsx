import {RepositoriesDTO} from
import {TextoCard, ViewCard} from

interface CardProps {
  item: RepositoriesDTO;
}

const Card = ({item}): CardProps) => {
  return(
    <ViewCard>
    <TextoCard></TextoCard>
    </ViewCard>

  )
}