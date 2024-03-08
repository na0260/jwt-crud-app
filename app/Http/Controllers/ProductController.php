<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:80',
            'description' => 'nullable|string|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'image' => 'required|image'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images'), $filename);
            $validatedData['image'] = $filename;
        }

        $product = Product::create($validatedData);
        return response()->json([
            'message' => 'Product successfully created',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, product $product)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:80',
            'description' => 'nullable|string|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'image' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images'), $filename);
            $validatedData['image'] = $filename;
        }

        $product->update($validatedData);
        return response()->json([
            'message' => 'Product successfully updated',
            'product' => $product
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(product $product)
    {
        $product->delete();
        if (file_exists(public_path('images/' . $product->image))) {
            unlink(public_path('images/' . $product->image));
        }
        return response()->json([
            'message' => 'Product successfully deleted'
        ], 200);
    }
}
