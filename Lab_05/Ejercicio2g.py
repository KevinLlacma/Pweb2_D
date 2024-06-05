from interpreter import draw
from chessPictures import square, rock, knight, bishop, queen, king, pawn

white_square = square
black_square = square.negative()


row_start_white = white_square.join(black_square).horizontalRepeat(4)
row_start_black = black_square.join(white_square).horizontalRepeat(4)

# filas alternando los colores
row1 = row_start_white
row2 = row_start_black
row3 = row_start_white
row4 = row_start_black
row5 = row_start_white
row6 = row_start_black
row7 = row_start_white
row8 = row_start_black

# filas con las piezas negras 
row1_with_pieces = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)
row2_with_pieces = pawn.horizontalRepeat(8)

# filas vacías
empty_row1 = row_start_white
empty_row2 = row_start_black
empty_row3 = row_start_white
empty_row4 = row_start_black

# filas con las piezas blancas
row7_with_pieces = pawn.horizontalRepeat(8)
row8_with_pieces = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)

# Combinar todopara formar el tablero 
chessboard = row1_with_pieces.up(row2_with_pieces).up(empty_row1).up(empty_row2).up(empty_row3).up(empty_row4).up(row7_with_pieces).up(row8_with_pieces)


draw(chessboard)
