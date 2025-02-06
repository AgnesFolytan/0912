import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Creates a new user
   * 
   * @param createUserDto The data to create a new user
   * @returns JSON response with the created user
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Logs in an existing user
   * 
   * @returns JSON response with login details
   */
  @Post('login')
  

  /**
   * Retrieves all users
   * 
   * @returns JSON response with an array of users
   */
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Retrieves a user by ID
   * 
   * @param id The unique ID of the user
   * @returns JSON response with user details
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   * Modifies the details of an existing user
   * 
   * @param id The unique ID of the user
   * @param updateUserDto The data to modify
   * @returns JSON response with the modified user data
   */
  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'int',
    description: 'The unique ID of the user'
  })
  @ApiResponse({ status: 200, description: 'The modified data of the user' })
  @ApiBadRequestResponse({ description: 'The supplied data was invalid' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /**
   * Deletes a user by ID
   * 
   * @param id The unique ID of the user
   * @returns JSON response confirming deletion
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
