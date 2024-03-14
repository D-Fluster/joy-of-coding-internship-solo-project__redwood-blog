// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ReadPostCell from 'src/components/ReadPostCell/'

interface Props {
  id: number;
}

const ReadPostPage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Article | Read Post" description="Read Post AKA Article page" />

      <ReadPostCell id={id} />
    </>
  )
}

export default ReadPostPage
