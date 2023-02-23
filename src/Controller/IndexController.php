<?php

namespace App\Controller;

use App\Form\UploadedPostType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/index', name: 'app_index')]
    public function index(): Response
    {

        return $this->render('index/index.html.twig', [
            'imie' => "Jakub",
        ]);
    }
    #[Route('/new_post', name: 'app_new_post')]
    public function newPost()
    {
        $form = $this->createForm(UploadedPostType::class);

        return $this->render('index/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
