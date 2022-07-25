pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WKNDToken is ERC20{
    constructor(uint256 _initialSupply) ERC20("Wakanda Token", "WKND") {
        _mint(msg.sender, _initialSupply);
    }

    function burn(address _address, uint256 _amount) public {
        require(_address != address(0), "Can't be zero address");
        require(_amount > 0, "Can't burn zero tokens");
        _burn(_address, _amount);
    }

    function transfer(
        address _from,
        address _to,
        uint256 _amount
    ) public {
        require(_from != address(0), "From can't be zero address");
        require(_to != address(0), "To can't be zero address");
        require(_amount > 0 && balanceOf(_from) >= _amount, "No enaugh tokens");
        _transfer(_from, _to, _amount);
    }
}
