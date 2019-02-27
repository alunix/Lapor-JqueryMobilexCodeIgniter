<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class film_m extends CI_Model {

  public function selectAll(){
    return $this->db->get('film');
  }

}
