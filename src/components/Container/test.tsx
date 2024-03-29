import { render } from '@testing-library/react'
import { Container } from './index'

describe('<Container />', () => {
  it('should render the container and childrens', () => {
    const { container } = render(
      <Container>
        <span>Container</span>
      </Container>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Container
        </span>
      </div>
    `)
  })
})
