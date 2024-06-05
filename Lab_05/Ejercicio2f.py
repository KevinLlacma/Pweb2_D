from interpreter import draw
from chessPictures import square

white_square = square
black_square = square.negative()

# fila intercalando 8 cuadros, comenzando con blanco
row_start_white = white_square.join(black_square).horizontalRepeat(4)

# comienza con negro
row_start_black = black_square.join(white_square).horizontalRepeat(4)

checkerboard = row_start_white.up(row_start_black).verticalRepeat(2)

draw(checkerboard)
