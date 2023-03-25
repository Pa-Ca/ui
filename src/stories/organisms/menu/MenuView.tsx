import React, {useRef} from "react";
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { MenuSection } from "../../utils/objects/MenuSectionObject"
import './menu.scss';
import { useDraggable } from "react-use-draggable-scroll";


export interface MenuProps {
  /**
   * A list of menu sections
   */
  courses: MenuSection[];

  /**
   * width of the component
   * */
  width?: string;

  /**
   * height of the component
   * */
  height?: string;
}

// Make an example course list
const exampleCourseList: MenuSection[] = [
  {
    name: "Entrantes",
    products: [
      {
        name: "Ensalada de tomate",
        price: 3.5
      },
      {
        name: "Ensalada de atun",
        price: 3.5
      },
      {
        name: "Ensalada de yuca",
        price: 3.5
      },
    ]
  },
  {
    name: "Primeros",
    products: [
      {
        name: "Ensalada de pepitona",
        price: 4.2

      },
      {
        name: "Ensalada de tomate",
        price: 4.2
      },
    ]
  },
  {
    name: "Bebidas",
    products: [
      {
        name: "Coca cola",
        price: 1.5
      },
      {
        name: "Fanta",
        price: 1.5
      },
      {
        name: "Agua",
        price: 1.5
      },
    ]
  },
]


export const MenuView = ({
  courses = exampleCourseList,
  width,
  height,
  ...props
}: MenuProps) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <Box {...props} width={width} className="menu-view--container" backgroundColor="#FFFFFF">
      {/* Write the name of the courses*/}

      <div
            className="menu-view--top-carousel"
            ref={ref}
            {...events}
            
          >
      <Box className="menu-view--menu-sections" >
        {courses.map((course, index) => {
          return (
            
            <Text key={index} className="menu-view--menu-section" weight="700">{course.name}</Text>
           
          )
        })}
      </Box>
      </div>
      {/*Add a dotted line between*/}

      <Box className="menu-view--line" backgroundColor="#FFFFFF" />

      {courses.map((course, index) => {
        return (
          <Box key={index} className="menu-view--course" backgroundColor="transparent">
            <Text className="menu-view--course-name" weight="700">{course.name}</Text>
            {course.products.map((product, index) => {
              return (
                <Box key={index} className="menu-view--product" backgroundColor="transparent">
                  <Text className="menu-view--product-name">{product.name}</Text>
                  {/*Add a dotted line between*/}
                  <Box className="menu-view--product-dotted-line" backgroundColor="white" />
                  <Text className="menu-view--product-price">{product.price}€</Text>
                </Box>
              )
            })}
          </Box>
        )
      })}

    </Box>

  )
}