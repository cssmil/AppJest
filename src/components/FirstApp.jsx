import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      <h1 className="mt-2"> { title } </h1>
      <hr />
      <p> { subTitle } </p>
      <p> { name } </p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: "no tiene titulo",
  subTitle: "No tiene sub-titulo",
  name: "No tiene name"
}